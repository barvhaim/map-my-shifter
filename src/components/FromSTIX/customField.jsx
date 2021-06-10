import { TextInput, Modal, ComposedModal, Button } from "carbon-components-react";
import React, {useState} from "react";


export const customField = (props) => {
    return (
        <Modal
            /*open = {state.}*/
            modalHeading="Add a custom field"
            modalLabel=""
            primaryButtonText="Add"
            secondaryButtonText="Cancel">

            <TextInput
                data-modal-primary-focus
                id="text-input-1"
                labelText=""
                placeholder="e.g. x-oca-event:category id"
                style={{ marginBottom: '1rem' }}
            />

        </Modal>
    );
};


/*
function ModalStateManager() {
    const [open, setOpen] = useState(false);
    return (
        <>
            {typeof document === 'undefined'
                ? null

                : ReactDOM.createPortal(
                    <ComposedModal open={open} onClose={() => setOpen(false)}>
                        ...
                    </ComposedModal>,
                    document.body
                )}
            <Button kind="primary" onClick={() => setOpen(true)}>
                Open modal
            </Button>
        </>
    );
}


 */










export default ModalStateManager;