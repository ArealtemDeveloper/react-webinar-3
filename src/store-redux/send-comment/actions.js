export default {
    /**
     * Загрузка товара
     * @param id
     * @return {Function}
     */
    sendComment: (_id, _type, text, successCallback) => {
      return async (dispatch, getState, services) => {
  
        dispatch({type: 'comments/sendMessage-start'});
  
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
          successCallback();
  
          dispatch({type: 'comments/sendMessage-success', payload: {data: res.data.result}});
  
        } catch (e) {
          //Ошибка загрузки
          dispatch({type: 'comments/sendMessage-error', payload: e?.message});
        }
      }
    },
  }