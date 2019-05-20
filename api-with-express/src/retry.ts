const retry: Function = (fn:()=>Promise<any>, retries:number, timeOut:number ):Promise<any> => {

    return new Promise<any>(
        ( resolve, reject ) => {
        
            const attempt = () => fn().then(
                ( value ) => {

                    resolve(value);
                }
            ).catch(
                ( error ) => {
                    
                    retries--;
                    if(retries>0)
                    {
                        setTimeout( () => { attempt(); }, timeOut );
                    }
                    else
                    {
                        reject(error);
                    }
                    
                }
            )

          attempt();
        }
        )
}

export default retry;