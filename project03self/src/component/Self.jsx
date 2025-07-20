import React, { useState } from 'react'
import axios from 'axios'

const Self = () => {

  const [movieData, setmovieData] = useState([])

  const getData = ()=>{
    axios({
        url : 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=888d5987c58e00e7a38c862ab289b287&targetDt=20120101',
        method : 'GET'
    })
    .then((res)=>{
        console.log('통신성공')
        setmovieData(res.data.boxOfficeResult.dailyBoxOfficeList)
    })
  }

  return (
    <div>
        <h1>영화 데이터 비동기 통신(Axios)</h1>
        <button onClick={getData}>데이터 가져오기</button>
        <table border={1}>
            <tr>
                <td>영화 순위</td>
                <td>제목</td>
                <td>개봉일</td>
            </tr>
            {movieData.map(item => <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>)}
        </table>
    </div>
  )
}

export default Self