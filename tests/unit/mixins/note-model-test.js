import Ember from 'ember';
import NoteModelMixin from '../../../mixins/note-model';
import { module, test } from 'qunit';

module('Unit | Mixin | note model');

// Replace this with your real tests.
test('it works', function(assert) {
  let NoteModelObject = Ember.Object.extend(NoteModelMixin);
  let subject = NoteModelObject.create();
  assert.ok(subject);
});
