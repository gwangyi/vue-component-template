import {% for w in cookiecutter.project_name.split('-') %}{{w | capitalize}}{% endfor %} from './{% for w in cookiecutter.project_name.split('-') %}{{w | capitalize}}{% endfor %}.vue'

export default {
  install (Vue, option) {
    Vue.component('{{cookiecutter.project_name}}', {% for w in cookiecutter.project_name.split('-') %}{{w | capitalize}}{% endfor %})
  }
}
