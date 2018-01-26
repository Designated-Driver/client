# VueJS

Vue is known for their easy to read documentation and developer friendly community. Their documentation is straight up the best resource on the internet. Read this document first because I cover a lot of the basics here. If you want to learn more about vue you can view their documentation @ https://vuejs.org/v2/guide/. The only thing i'm not covering here is Vuex, which you can find @ https://vuex.vuejs.org/en/.

# Vue-loader

- Template Syntax
  - Text/data interpolation
    - Data can be interpolated in the DOM using handlebars style. Use {{jsVal}} to see what jsVal actually is.
    - Handlebars will also interpolate any javascript you put in. For example: {{'dog'.split('').reverse().join('')}} will print out god.
    - Data can be interpolated in attributes but must be coupled with the v-bind directive and using &quot;&quot; instead of {{}}. See v-bind examples below.
- Directives 
  - @ is short-hand for v-on
    - <p><code>&lt;div @click=&quot;methodToExecute&quot;>&lt;/div></code></p> 
    - <p><code>&lt;div @click=&quot;methodsToRun(item.imgSrc)&quot;>&lt;/div></code></p>
  - : is short-hand for v-bind
    - <p><code>&lt;div :class=&quot;{ active: isActive, 'text-danger': hasError }&quot;>&lt;/div></code></p> 
    - <p><code>&lt;div :id=&quot;dynamicId&quot;>&lt;/div></code></p>
- Conditional Rendering
  - v-if
    - <p><code>&lt;div v-if=&quot;0 === 10&quot;>Render this never&lt;/div></code></p><p><code>&lt;div v-else>Render this always&lt;/div></code></p>
    - <p><code>&lt;div v-if=&quot;showDiv&quot;>Render me if showDiv is true&lt;/div></code></p>
    - <p><code>&lt;img src=&quot;&quot; v-if=&quot;item.imgSrc&quot;/> // Render this image if item has imgSrc</code></p>
- List Rendering
  - v-for
    - <p><code>&lt;div v-for=&quot;(item, index) in listOfItems&quot; :key=&quot;index&quot;>{{item.val}}&lt;/div></code></p>
    - Must pass along a key othewise vue complains.


The notes above will be used in conjuction with HTML in the template portion of .vue files. 

# Vue-loader Script Tag

Below is an example of what the script portion looks like.

```javascript
import { mapGetters, mapActions } from 'vuex'
import Frame from './components/Frame'
import Main from './Main'
export default {
  components: { Frame, Main },
  // <frame/> & <main/> are available in the template
  computed: {
    ...mapGetters([
      'getUsers',
      'getitems',
      'getImages'
    ])
    // call these functions in v-if / v-for in the template
  },
  data () {
    return {
      msg: 'Hello world!'
    }
    // Use {{msg}} to see 'hello world' in the template
  },
  methods: {
    ...mapActions([
      'callVuexActionName'
    ]),
    // Call using @mouseOver="callVuexActionName"
    reverseString: (string) {
      return string.split('').reverse().join('')
    },
    constructSum: (a, b) {
      return a + b
    }
    // @click="reverseString"
    // @hover="constructSum"
  }
}
``` 

## CSS Resources
I'm not going to dive deep into CSS on this document. It's got the highest learning curve in my opinion and too much material to disclose. I highly recommend learning as much as you can by recreating some of your favorite sites. Remember that you can view the CSS of any page by opening the browsers inspector (ctrl+shift+I).

Yelp has a great homepage to try and recreate. Here are the tools I recommend learning in order to recreate it nicely. (Doesn't need to function, just HTML/CSS)

- CSS Grid
  - [Complete Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
    - Parent
      - display: grid;
      - grid-template: &lt;rows> / &lt;columns>
    - Child
      - grid-rows: &lt;row-start> / &lt;row-end>
      - grid-columns: &lt;column-start> / &lt;column-end
  - [Mozilla Resource](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
    - Mozilla has the best resources for the web.
- CSS Flexbox
  - [Complete Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
    - Parent
      - display: flex;
      - flex-direction: &lt;row> or &lt;column>
        - This sets the main axis
        - default value is row
      - justify-content: &lt;flex-start> &lt;flex-end> &lt;center> &lt;space-between> &lt;space-around>
        - How to align the children along the main axis
      - align-items: &lt;flex-start> &lt;flex-end> &lt;center> &lt;space-between> &lt;space-around>
        - How to align the children along the secondary axis
  - WesBos has fantastic videos for flexbox and grid. I've taken his react / javascript 30 courses and enjoyed them, although he is a bit much at times.
    - http://wesbos.com/courses
      - What the Flexbox?!
        - Episode 2, 6, 7
      - CSS Grid
      - Javascript 30 (if you want, it's kind of a fun course)
- Generally, it's agreed upon to use CSS Grid to structure large components of your page and flexbox within those components.
  - CSS Grid = 2D
  - Flexbox = 1D
- SCSS
  - http://sass-lang.com/guide
  - Just read up quickly on nesting. That's literally the only feature we will be using.