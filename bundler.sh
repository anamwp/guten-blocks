zip -r tx-gutenberg.zip . -x .git/\* -x .idea/\* -x node_modules/\* -x src/\* -x .babelrc -x .editorconfig -x *.gitignore -x bundler.sh -x composer.lock -x __MACOSX/\*  && \
zip -T tx-gutenberg.zip && \
unzip -t tx-gutenberg.zip