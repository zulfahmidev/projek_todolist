<template>
  <div class="h-screen flex items-center justify-center bg-slate-200">
    <div class="w-96 h-96 shadow-lg rounded-md p-4 border-t-4 bg-gray-100 border-blue-600">
      <div class="overflow-auto h-full pb-2 border-b-2">
        <div class="flex sticky top-0 bg-gray-100 pb-2 shadow-md">
          <input type="text" maxlength="30" class="border focus:outline-none focus:shadow-md border-gray-200 py-2 w-full rounded-md px-4 text-sm" placeholder="Type here" v-model="title">
          <button class="w-10 bg-blue-500 rounded-md ml-2 text-white" @click="add">
            <Icon name="material-symbols:add" />
          </button>
        </div>
        <div class="rounded-md py-2 text-sm mb-2 border-t-2 border-gray-400 shadow-sm bg-white flex items-center hover:shadow-md" 
          v-for="(v, i) in todos" :key="i">
          <div class="w-full mx-4">{{ v.title }}</div>
          <div class="pr-4 cursor-pointer text-center" @click="switchStatus(v)">
            <Icon name="material-symbols:check-circle-outline-rounded" v-if="v.isdone == true" class="text-lg text-green-500" />
            <Icon name="ic:twotone-radio-button-unchecked" v-if="v.isdone == false" class="text-lg text-gray-500" />
          </div>
          <div class="pr-4 cursor-pointer text-center" @click="remove(v)">
            <Icon name="mdi:trash-can-outline" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { useCollection } from 'vuefire'
import { collection, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'

export default {
  data() {
    return {
      todos: [],
      db: useFirestore(),
      title: '',
    }
  },
  methods: {
    async add() {
      await addDoc(this.getCollection(), {
        title: this.title,
        isdone: false,
      })
      this.title = '';
    },
    getCollection() {
      return collection(this.db, 'barehbut');
    },
    async switchStatus(data) {
      await updateDoc(doc(this.db, 'barehbut', data.id), {
        isdone: !data.isdone
      })
    },
    async remove(data) {
      await deleteDoc(doc(this.db, 'barehbut', data.id))
    }
  },
  mounted() {
    
    this.todos = useCollection(this.getCollection())
  },
}
</script>