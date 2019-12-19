// New VueJS instance
new Vue({
  name: 'notebook',

  // CSS selector of the root DOM element
  el: '#notebook',

  // Propiedades (información de las notas)
  data () {
    return {
      // content: 'This is a note',
      content: localStorage.getItem('content') || 'You can write in **markdown**',
      notes:[],
      selectedId:null,
    }

  },

  // Computed properties
  computed: {
    notePreview () {
      // Markdown rendered to HTML
      return marked(this.content)
    },
  },

  // Change watchers
  watch: {
    /*content: {
      handler (val, oldVal) {
        console.log('new note:', val, 'old note:', oldVal)
        localStorage.setItem('content', val)
      },
      immediate: true,
    },*/

    /*content (val) {
      localStorage.setItem('content', val)
    },*/

    /*content: {
      handler: 'saveNote',
    },*/

    content: 'saveNote',
  },

  methods: {
    addNote(){
        const time= Date.now()
        const note={
            id:String(time),
            title:'Nueva nota ' + (this.notes.lenght+1),
            content:"**Hola!** Este bloc usa [markdown]",
            created:time,
            favorite:false,
        }
        this.notes.push(note)
    },
    selectedNote(){
        this.selectedId=note.id
    },
    saveNote (val, oldVal) {
      console.log('new note:', val, 'old note:', oldVal)
      console.log('saving note:', this.content)
      localStorage.setItem('content', this.content)
      this.reportOperation('saving')
    },
    reportOperation (opName) {
      console.log('The', opName, 'operation was completed!')
    },
  },

  /* created () {
    this.content = localStorage.getItem('content') || 'You can write in **markdown**'
  }, */
})
