# {{ cookiecutter.project_name }}

{{ cookiecutter.description }}

## Quick Start

Install {{ cookiecutter.project_name }}

```bash
yarn install {{ cookiecutter.project_name }}
```

When you need to use this component:

```javascript
import {% for w in cookiecutter.project_name.split('-') %}{{w | capitalize}}{% endfor %} from '{{ cookiecutter.project_name }}'
import Vue from 'vue'

Vue.use({% for w in cookiecutter.project_name.split('-') %}{{w | capitalize}}{% endfor %})
```
