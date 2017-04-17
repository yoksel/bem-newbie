var enbBemTechs = require('enb-bem-techs'),
    borschikTech = require('enb-borschik/techs/borschik'),
    postcssTech = require('enb-postcss/techs/enb-postcss');

module.exports = function(config) {
    var isProd = process.env.YENV === 'production';

    config.nodes('*.bundles/*', function(nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [require('enb/techs/file-provider'), {
                target: '?.bemjson.js'
            }],
            [enbBemTechs.files],
            [enbBemTechs.deps],
            [enbBemTechs.bemjsonToBemdecl],
            // bemtree
            [require('enb-bemxjst/techs/bemtree'), {
                devMode: process.env.BEMTREE_ENV === 'development',
                compact: true
            }],
            // node.js
            [require('enb-diverse-js/techs/node-js'), {
                target: '?.pre.node.js'
            }],
            [require('enb-modules/techs/prepend-modules'), {
                source: '?.pre.node.js',
                target: '?.node.js'
            }],
            // browser.js
            [require('enb-diverse-js/techs/browser-js'), {
                target: '?.browser.js'
            }],
            [require('enb/techs/file-merge'), {
                target: '?.pre.js',
                sources: ['?.browser.bh.js', '?.browser.js']
            }],
            [require('enb-modules/techs/prepend-modules'), {
                source: '?.pre.js',
                target: '?.js'
            }],
            // bh
            [require('enb-bh/techs/bh-commonjs'), {
                bhOptions: {
                    jsAttrName: 'data-bem',
                    jsAttrScheme: 'json'
                }
            }],
            // client bh
            [enbBemTechs.depsByTechToBemdecl, {
                target: '?.bh.bemdecl.js',
                sourceTech: 'js',
                destTech: 'bemhtml'
            }],
            [enbBemTechs.deps, {
                target: '?.bh.deps.js',
                bemdeclFile: '?.bh.bemdecl.js'
            }],
            [enbBemTechs.files, {
                depsFile: '?.bh.deps.js',
                filesTarget: '?.bh.files',
                dirsTarget: '?.bh.dirs'
            }],
            [require('enb-bh/techs/bh-bundle'), {
                target: '?.browser.bh.js',
                filesTarget: '?.bh.files',
                bhOptions: {
                    jsAttrName: 'data-bem',
                    jsAttrScheme: 'json',
                },
                mimic: 'BEMHTML'
            }],
            // html
            [require('enb-bh/techs/bemjson-to-html')],
            // tidy html
            [require('enb-beautify/techs/enb-beautify-html'), {
                sourceTarget: '?.html',
                destTarget: '?.tidy.html'
            }],
            // borschik
            [borschikTech, {
                sourceTarget: '?.css',
                destTarget: '?.min.css',
                tech: 'cleancss',
                freeze: true,
                minify: isProd
            }],
            [borschikTech, {
                sourceTarget: '?.js',
                destTarget: '?.min.js',
                freeze: true,
                minify: isProd
            }]
        ]);

        nodeConfig.addTargets([
            '?.min.css',
            '?.bemtree.js',
            '?.node.js',
            '?.min.js',
            '?.bh.js',
            '?.html',
            '?.tidy.html'
        ]);
    });

    config.nodes('*desktop.bundles/*', function(nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, {
                levels: [{
                        path: 'libs/bem-core/common.blocks',
                        check: false
                    },
                    {
                        path: 'libs/bem-core/desktop.blocks',
                        check: false
                    },
                    {
                        path: 'libs/bem-components/common.blocks',
                        check: false
                    },
                    {
                        path: 'libs/bem-components/design/common.blocks',
                        check: false
                    },
                    {
                        path: 'libs/bem-components/desktop.blocks',
                        check: false
                    },
                    {
                        path: 'libs/bem-components/design/desktop.blocks',
                        check: false
                    },
                    'templates.blocks',
                    'common.blocks',
                    'desktop.blocks',
                    'data.blocks'
                ]
            }],

            [
                postcssTech,
                {
                    target: '?.css',
                    sourcemap: true,
                    plugins: getPostcssPlugins()
                }
            ]
        ]);

    });

    function getPostcssPlugins() {
        return [
            require('postcss-import'),
            require('postcss-calc'),
            // require('autoprefixer'),

            require('postcss-simple-vars'),
            require('postcss-nested'),
            require('postcss-cssnext')({
                browsers: ['last 2 versions', 'Chrome >= 34', 'iOS >= 7']
            }),
            require('postcss-url')({
                url: 'rebase'
            })
        ];
    }
};
