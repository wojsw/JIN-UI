import { render } from '@testing-library/vue'
import Button from '../src/button';

test('default slot should be 按钮', () => { 
    const renderSlot = render(Button, {
        slots: {
            default() {
                return 'confirm'
            }
        }
    });
    const getAllByText = renderSlot.getAllByText
    // // console.log(res.getAllByText);
    
    getAllByText('confirm')

    const renderProps = render(Button, {
        props: {
            type: 'primary'
        }
    })
    const getAllByRole = renderProps.getAllByRole;
    const button = getAllByRole('button');
    console.log(button);
    
    // expect(button.class.contains('s-btn--primary')).toBe(true);
}) 