

const compareFunc = require('compare-func');
const Q = require('q');
const readFile = Q.denodeify(require('fs').readFile);
const resolve = require('path').resolve;

const TYPE_TEXT = {
    'feat': '✨ 新功能',
    'fix': '🐛 Bug 修复',
    'style': '💄 样式修改',
    'perf': '⚡ 性能优化',
    'build': '🔧 打包',
    'refactor': '♻ 代码重构'
};

/**
 * @returns {object} WriterOpts
 */
function getWriterOpts() {
    return {
        transform: (commit, context) => {
            // let discard = true;
            const issues = [];

            commit.notes.forEach(note => {
                note.title = '**重大更新**';
                // discard = false;
            });

            const typeText = TYPE_TEXT[commit.type];
            if (!typeText) {
                return;
            }

            commit.type = typeText;

            if (commit.scope === '*') {
                commit.scope = '';
            }

            if (typeof commit.hash === 'string') {
                commit.shortHash = commit.hash.substring(0, 7);
            }

            if (typeof commit.subject === 'string') {
                let url = context.repository
                    ? `${context.host}/${context.owner}/${context.repository}`
                    : context.repoUrl;
                if (url) {
                    url = `${url}/issues/`;
                    // Issue URLs.
                    commit.subject = commit.subject.replace(/#([0-9]+)/g, (_, issue) => {
                        issues.push(issue);
                        return `[#${issue}](${url}${issue})`;
                    });
                }
                if (context.host) {
                    // User URLs.
                    commit.subject = commit.subject.replace(/\B@([a-z0-9](?:-?[a-z0-9/]){0,38})/g, (_, username) => {
                        if (username.includes('/')) {
                            return `@${username}`;
                        }

                        return `[@${username}](${context.host}/${username})`;
                    });
                }
            }

            // remove references that already appear in the subject
            commit.references = commit.references.filter(reference => {
                if (issues.indexOf(reference.issue) === -1) {
                    return true;
                }

                return false;
            });

            return commit;
        },
        groupBy: 'type',
        commitGroupsSort: 'title',
        commitsSort: ['scope', 'subject'],
        noteGroupsSort: 'title',
        notesSort: compareFunc
    };
}

module.exports = Q.all([
    readFile(resolve(__dirname, './templates/template.hbs'), 'utf-8'),
    readFile(resolve(__dirname, './templates/header.hbs'), 'utf-8'),
    readFile(resolve(__dirname, './templates/commit.hbs'), 'utf-8'),
    readFile(resolve(__dirname, './templates/footer.hbs'), 'utf-8')
])
    .spread((template, header, commit, footer) => {
        const writerOpts = getWriterOpts();

        writerOpts.mainTemplate = template;
        writerOpts.headerPartial = header;
        writerOpts.commitPartial = commit;
        writerOpts.footerPartial = footer;

        return writerOpts;
    });

