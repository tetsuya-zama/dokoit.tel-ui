import {take,put,select,takeEvery,takeLatest,call} from 'redux-saga/effects'
import {MY_DESTINATION_SAVE_COMPLETE} from '../action/mydestination'
import {openNotice, closeNotice} from '../action/notice';

export function* noticeSaveCompleteSaga(){
    yield take(MY_DESTINATION_SAVE_COMPLETE);// noticeSaveCompleteSagaでは、1回目のMY_DESTINATION_SAVE_COMPLETEではnoticeSaveCompleteTaskを実行しない。
    yield takeEvery(MY_DESTINATION_SAVE_COMPLETE, noticeSaveCompleteTask);// takeEvery...第一引数のイベントが発火するまで待つ。発火されたら第二引数を実行する。
}

export function* noticeSaveCompleteTask(){
    yield put(openNotice("変更しました"));
}