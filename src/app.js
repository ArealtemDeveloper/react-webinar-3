import React, {useCallback} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import { useState } from 'react';
import Modal from './components/modal';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

  const list = store.getState().list;
  const [modalOpen, setModalOpen] = useState(false);

  const callbacks = {
    onAddItem: useCallback((code) => {
      store.addItem(code);
    }, [store]),

    onSelectItem: useCallback((code) => {
      store.selectItem(code);
    }, [store]),

    onModalOpen: () => {
      setModalOpen(true)
      console.log(modalOpen)
    },
    // onAddItem: useCallback(() => {
    //   store.addItem();
    // }, [store])
  }

  return (
    <PageLayout>
      <Head title='Приложение на чистом JS'/>
      <Controls 
        modalOpen 
        onModalOpen={callbacks.onModalOpen}/>
      <List 
            list={list}
            onAddItem={callbacks.onAddItem}/>
            {modalOpen ? <Modal setModalOpen={setModalOpen}/> : null}
    </PageLayout>
  );
}

export default App;
