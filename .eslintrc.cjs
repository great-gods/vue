module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        // eslint 规则
      'comma-spacing': [2,
        {
          // 强制在逗号前后使用一致的间距  例  a , b   or a, b
          before: false,
          after: true
        }
      ],
      'key-spacing': [2,
        {
          // 在对象文本属性中的键和值之间强制实施一致的间
          beforeColon: false,
          afterColon: true
        }
      ],
      "no-var": "error", //禁止使用var定义变量
    }
}
