import { uuid } from 'vue-uuid';

import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state = {
  items: [
    {
      id: uuid.v4(),
      description: 'Some item stuff here',
      addedToCart: false,
      selected: false
    },
    {
      id: uuid.v4(),
      description: 'Pumpkin',
      addedToCart: false,
      selected: false
    },
    {
      id: uuid.v4(),
      description: 'Just a test!',
      addedToCart: true,
      selected: false
    },
    {
      id: uuid.v4(),
      description: 'Something here',
      addedToCart: false,
      selected: false
    },
    {
      id: uuid.v4(),
      description: 'Hello there world!',
      addedToCart: false,
      selected: false
    },
    {
      id: uuid.v4(),
      description:
        "I am a very very long text hahahahahahahha, yes indeed, so long that I can't fit in one line, so I must design items css so that it would fit any item's length correctly.",
      addedToCart: true,
      selected: false
    }
  ]
};

export default {
  state,
  getters,
  actions,
  mutations
};
