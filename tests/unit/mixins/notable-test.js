import Ember from 'ember';
import NotableMixin from '../../../mixins/notable';
import { module, test } from 'qunit';

module('Unit | Mixin | notable');

// Replace this with your real tests.
test('it works', function(assert) {
  let NotableObject = Ember.Object.extend(NotableMixin);
  let subject = NotableObject.create();
  assert.ok(subject);
});
