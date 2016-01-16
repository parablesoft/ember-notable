import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('focus-textarea', 'Integration | Component | focus textarea', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{focus-textarea}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#focus-textarea}}
      template block text
    {{/focus-textarea}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
