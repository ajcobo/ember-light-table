import Ember from 'ember';
import layout from '../templates/components/lt-head';
import TableColumn from '../mixins/table-column';

export default Ember.Component.extend(TableColumn, {
  layout,
  tagName: 'thead',
  classNames: ['lt-head'],
  table: null
});