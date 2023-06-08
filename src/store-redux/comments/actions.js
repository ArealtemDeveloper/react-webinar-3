export default {
    /**
     * Загрузка товара
     * @param id
     * @return {Function}
     */
    loadComments: (articleId) => {
      return async (dispatch, getState, services) => {
        dispatch({type: 'comments/load-start'});

        try {
         const response = await services.api.request({
            url: `/api/v1/comments?search[parent]=${articleId}&limit=*&fields=items(_id,text,dateCreate,author(profile(name)),parent(_id,_type)),count`
         })
         dispatch({type: 'comments/load-success', payload: {data: response.data.result}})
  
        } catch (e) {
          //Ошибка загрузки
          dispatch({type: 'comments/load-error', payload: e?.message});
        }
      }
    },
  }