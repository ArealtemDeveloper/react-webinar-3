import React,  {memo, useCallback} from 'react';
import useStore from "../../hooks/use-store";
import useSelector from "../../hooks/use-selector";
import useTranslate from '../../hooks/use-translate';
import PageLayout from '../../components/page-layout';
import Auth from '../../components/auth';
import Head from '../../components/head';
import Navigation from '../../containers/navigation';
import UserProfile from '../../components/user-profile';

function User() {
    const store = useStore();
    const { t } = useTranslate();

    const select = useSelector(state => ({
        user: state.user.user,
    }));

    const callbacks = {
        signIn: useCallback(() => store.actions.user.signIn(), [store]),
        signOut: useCallback(() => store.actions.user.signOut(), [store]),
    }

    return (
        <PageLayout>
            <Auth user={select.user} signIn={callbacks.signIn} signOut={callbacks.signOut}/>
            <Head title={t('title')}/>
            <Navigation/>
            <UserProfile user={select.user}/>
        </PageLayout>
    )

}

export default memo(User);