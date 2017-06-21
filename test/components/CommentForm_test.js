import { renderComponent, expect } from '../test_helper';
import CommentForm from '../../src/components/CommentForm';

describe('CommentForm',()=>{
    let component;
    beforeEach(()=>{
        component = renderComponent(CommentForm);
    });

    it('Has the correct class',()=>{
        expect(component).to.have.class('comment-form');
    });

    it('Has a TextArea',()=>{
        expect(component.find('textarea')).to.exist;
    });

    it('Has a Button',()=>{
        expect(component.find('button')).to.exist;
    });

    describe('on text input',()=>{
        beforeEach(()=>{
            component.find('textarea').simulate('change','new comment');
        });

        it('shows text that is entered',()=>{
            expect(component.find('textarea')).to.have.value('new comment');
        });

        it('clears the input when submitted',()=>{
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });
    });
});
