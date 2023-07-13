import { FC } from "react";
import { KTIcon } from "../../../helpers";
const Tester: FC = () => {
    return (
        <div className='modal fade' id='kt_modal_my_plan' aria-hidden='true'>
            <div className='modal-dialog modal-md'>
                <div className='modal-content rounded'>
                    <div className='modal-header justify-content-end border-0 pb-0'>
                        <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
                            <KTIcon iconName='cross' className='fs-1' />
                        </div>
                    </div>
                    <div className='modal-body py-5'>
                        <div className="text fw-bold text-muted">
                            Hello,This is Guna here,,,
                        </div>
                    </div>
                    <div className='modal-footer text text-center py-5'>
                        <button className="btn btn-primary btn-sm">close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Tester };