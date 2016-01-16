import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('notable-form', 'Integration | Component | notable form', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{notable-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#notable-form}}
      template block text
    {{/notable-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
