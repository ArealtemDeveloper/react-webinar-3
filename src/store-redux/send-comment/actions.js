export default {
    /**
     * Загрузка товара
     * @param id
     * @return {Function}
     */
    sendComment: (_id, _type, text) => {
      return async (dispatch, getState, services) => {
        const token = localStorage.getItem('token');
  
        dispatch({type: 'comments/sendMessage-start'});
  
        if(token) {
          try {
            const res = await services.api.request({
                url: `api/v1/comments`,
                method: 'post',
                body: JSON.stringify({
                  text,
                  "parent": {
                    _id,
                    _type,
                  }
                })
              }
            );
            dispatch({type: 'comments/sendMessage-success', payload: {data: res.data.result}});
    
          } catch (e) {
            //Ошибка загрузки
            dispatch({type: 'comments/sendMessage-error', payload: e?.message});
          }
          
        }
      }
    },
  }