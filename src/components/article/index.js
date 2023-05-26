import {memo, useEffect, useState} from 'react';
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import {useParams} from "react-router-dom";
import 'style.css'
import Head from "../head";
import BasketTool from "../basket-tool";
import {cn as bem} from "@bem-react/classname";

function Article() {
    
    const store = useStore();
    const { id } = useParams();
    const cn = bem('Article');
    const [article, setArticle] = useState({});

    async function fetchArticle() {
        const response = await fetch(`/api/v1/articles/${id}?fields=*,madeIn(title,code),category(title)`);
        const data = await response.json();
        setArticle(data.result);
    }

    useEffect(() => {
        fetchArticle();
    }, [id]);

    const basketState = useSelector(state => ({
        amount: state.basket.amount,
        sum: state.basket.sum,
    }));

    const callbacks = {
        addToBasket: () => {
            store.actions.basket.addToBasket(article._id)
        },
        openModal: () => {
            store.actions.modals.open('basket')
        }
    }

    return (
        <div className={cn()}>
            <Head title={article.title}/>
            <BasketTool 
            onOpen={callbacks.openModal} 
            amount={basketState.amount} 
            sum={basketState.sum}
            >
            </BasketTool>
            <div className={cn('info')}>
                <p>{article.description}</p>
                <p className={cn('info-country')}>
                    Страна производитель: <span>{article.madeIn?.title}</span>
                </p>
                <p className={cn('info-category')}>
                    Категория: <span>{article.category?.title}</span>
                </p>
                <p className={cn('info-year')}>
                    Год выпуска: <span>{article.edition}</span>
                </p>
                <p className={cn('info-price')}>
                    Цена: {article.price} ₽
                </p>
            </div>
            <button className={cn('btn')} onClick={callbacks.addToBasket}>Добавить</button>
        </div>
    );
}

export default memo(Article);