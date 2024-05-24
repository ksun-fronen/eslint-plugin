module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'enforce single space between variable keyword and variable name',
      category: 'Stylistic Issues',
      recommended: false,
    },
    fixable: 'whitespace',
    schema: [], // no options
  },
  create: function (context) {
    return {
      VariableDeclaration(node) {
        const sourceCode = context.getSourceCode();
        node.declarations.forEach(decl => {
          const keyword = sourceCode.getFirstToken(node);
          const identifier = sourceCode.getTokenAfter(keyword);
          const textBetween = sourceCode.text.slice(keyword.range[1], identifier.range[0]);

          // Check if there is exactly one space and no newline between keyword and identifier
          if (textBetween !== ' ') {
            context.report({
              node: decl,
              message: `There should be exactly one space between '${keyword.value}' and variable name '${identifier.value}'.`,
              fix: function (fixer) {
                return fixer.replaceTextRange([keyword.range[1], identifier.range[0]], ' ');
              },
            });
          }
        });
      },
    };
  },
};
