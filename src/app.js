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
  const basket = store.getState().basket;
  const [modalOpen, setModalOpen] = useState(false);

  const callbacks = {
    onAddItem: useCallback((code) => {
      store.addItemBasket(code);
    }, [store]),

    onDeleteItem: useCallback((code) => {
      store.deleteItem(code);
    }, [store]),

    onModalOpen: () => {
      setModalOpen(true)
    },
  }

  return (
    <PageLayout>
      <Head title='Магазин'/>
      <Controls 
        modalOpen 
        basket={basket}
        onModalOpen={callbacks.onModalOpen}/>
      <List 
            basket={basket}
            list={list}
            onAddItem={callbacks.onAddItem}
            />
            {
            modalOpen
             ? 
             <Modal 
             setModalOpen={setModalOpen} 
             basket={basket}
             onDeleteItem={callbacks.onDeleteItem}
             /> 
             : 
             null
             }
    </PageLayout>
  );
}

export default App;
