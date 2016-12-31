import { createSelector, createStructuredSelector } from 'reselect';
import { symbols } from '../constants';

const unsafeStorySelector = state => state.story.replace(/--/g, '-');

const statsSelector = createSelector(
  unsafeStorySelector,
  story => {
    return symbols.map(sym => ({label: sym, 'знаков': story.split(sym).length}));
  }
);

const dotsSelector = createSelector(
  unsafeStorySelector,
  story => {
    return story.split('').filter(x => symbols.indexOf(x) > -1);
  }
);

export const selector = createStructuredSelector({
  dots: dotsSelector,
  stats: statsSelector
});
