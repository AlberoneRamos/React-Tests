import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/CommentList';

describe('CommentList',()=>{
    let component;

    beforeEach(()=>{
        const props = { 
            comments:[
                'Comentário',
                'Comentario novinho',
                'Comentarinho'
            ]
        };
        component = renderComponent(CommentList,null,props);
    })

    it('shows an LI for each comment',()=>{
        expect(component.find('li').length).to.equal(3);
    });

    it('shows each provided comment',()=>{
        expect(component).to.contain('Comentário');
        expect(component).to.contain('Comentario novinho');
        expect(component).to.contain('Comentarinho');
    });
});