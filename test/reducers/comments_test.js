import {expect} from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import {SAVE_COMMENT} from '../../src/actions/types';

describe('Comments Reducer',()=>{
    let startingState;
    beforeEach(()=>{
        startingState = ['Comentário'];
    });

    it('Default',()=>{
        var action = {
            type: 'DEFAULT'
        };
        let newState = commentReducer(startingState,action);
        expect(newState).to.equal(startingState);
    });

    it('SAVE_COMMENT',()=>{
        const action = {
            type: SAVE_COMMENT,
            comment:'Novo comentário'
        };
        const newState = commentReducer(startingState,action);
        expect(newState).to.have.length(2);
        expect(newState).to.eql(['Comentário','Novo comentário']);

    });
});