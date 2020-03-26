var App = new Vue({
  el: "#app",
  data() {
    return {
      search: "",
      title: "Creative",
      cards: [
        {
          name: "Standard",
          cardColor: "dark",
          items: [
            "Banner",
            "Hosted HTML5",
            "Expandable",
            "Interstitial",
            "Skin"
          ]
        },
        {
          name: "Video",
          cardColor: "danger",
          items: [
            "Audio",
            "Hosted Video",
            "Third-Party Hosted VAST"
          ]
        },
        {
          name: "Native",
          cardColor: "silver",
          items: [
            "AppNexus Hosted Native",
            "Video Native (also AppNexus hosted)",
            "Third Party Native"          ]
        }
      ]
    }
    },


  computed: {
    filteredCards() {
      var _this = this
      if(this.search.length === 0) return this.cards
      return this.cards.map(function(card) {
        return {
          name: card.name,
          cardColor: card.cardColor,
          items: card.items.filter(function (item) {
            return item.includes(_this.search)
          })
        }
      })
    }
  },

  methods: {
    removeCard (card) {
      this.cards.splice(this.cards.indexOf(card), 1)
    },
    clearSearchField () {
      this.search = ''
    }
  }
});
