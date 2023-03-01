import axios from 'axios';
 
export const position = async(req, res) => {
    const { page, description, location, fulltime } = req.body;
    
    var params={};

    if(page) params['page'] = page;
    if(description) params['description'] = description;
    if(location) params['location'] = location;
    if(fulltime) params['full_time'] = fulltime;

    // console.log(params)

    (async () => {
        try {
        const response = await axios.get('http://dev3.dansmultipro.co.id/api/recruitment/positions.json',{
            params:params
        })
            res.json( response.data );
        } catch (error) {
            res.json({ msg: error.response.body });
        }
    })();
    
}
 