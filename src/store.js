import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    moduleA: {
      namespaced: true,
      state: {
        a: "aaa"
      },
      mutations: {
        incrementA(state) {
          state.count += 1
        }
      },
      getters: {
        getss: (state, getters, rootState, rootGetter) => {
          console.log("访问全局State:" + rootState.countAlias)
          console.log("访问全局Getter:" + rootGetter.doneTodos)
          return state.a
        }
      },
      actions: {
        actionAA({commit}) {
          //在全局分发
          commit('increment2', null, {root: true})
        }
      }
    },
    moduleB: {
      namespaced: true,
      state: {
        a: "bbb"
      },
      getters: {
        getss: (state) => {
          return state.a
        }
      }
    }
  },


  state: {
    count: 1,
    countAlias: "countA",
    todos: [
      {id: 1, text: '...', done: true},
      {id: 2, text: '...', done: false}
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    getTodoById: (state => (id) => {
      return state.todos.find(todo => todo.id === id)
    })
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.amount
    },
    increment2(state) {
      state.count += 1
    }
  },
  actions: {
    increments(context) {
      context.commit('increment2')
    },
    incrementAsync({commit, getters}, payload) {
      setTimeout(() => {
        commit('increment', payload)
        payload.success("success:" + getters.doneTodos)
      }, 2000)
    },

    actionsA({commit}) {
      // new Promise((resolve, reject) => {
      //   //...some code
      //   if (success) {
      //       resolve(value)
      //   } else {
      //       reject(value)
      //   }
      // })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment2')
          resolve("result")
          // reject()
        }, 1000)
      })
    }
  }
});
