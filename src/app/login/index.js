import React,  {memo, useCallback} from 'react';
import useStore from "../../hooks/use-store";
import useSelector from "../../hooks/use-selector";
import useTranslate from '../../hooks/use-translate';
import PageLayout from '../../components/page-layout';
import Auth from '../../components/auth';
import Head from '../../components/head';
import Navigation from '../../containers/navigation';
import LoginForm from '../../components/login-form';

function User() {
    const store = useStore();
    const { t } = useTranslate();

    const select = useSelector(state => ({
        user: state.user.user,
        isAuth: state.user.isAuth,
        error: state.user.error,
    }));

    const callbacks = {
        signIn: useCallback((login, password) => store.actions.user.signIn(login, password), [store]),
        signOut: useCallback(() => store.actions.user.signOut(), [store]),
    }

    return (
        <PageLayout>
            <Auth 
            user={select.user} 
            isAuth={select.isAuth} 
            signOut={callbacks.signOut}
            />
            <Head title={t('title')}/>
            <Navigation/>
            <LoginForm 
            title={'Вход'} 
            signIn={callbacks.signIn}
            error={select.error}
            />
        </PageLayout>
    )

}

export default memo(User);