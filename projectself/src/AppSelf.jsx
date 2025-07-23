/*
1. 사용자에게 이름을 입력받는다 - userName
2. 현재 날짜를 가지고 온다.
3. 현재 날짜에서 일만 빼오기 - date
4. 조건에 따라 날짜를 정의하기
5. 테스트 용으로 console 창에 결과 출력
6[결과창] - h1 -> 2025.07.08 / hr/ h3 -> 안녕하세요 000 님 오늘은 몇 일입니다. 월 초이니 힘내세요. 행복한 하루 보내세요. 
*/

function AppSelf(){
    let today = new Date()
    console.log('현재 날짜 :', today.toLocaleDateString)
    console.log('일 :', today.getDate())
    let day = today.getDate()

    let userName = prompt('이름을 입력해주세요')
    let date = ''

    if(day <10) {
        date = '월초'
    } else if (day >= 10 && day < 20){
        date = '월중'
    } else {
        date = '월말'
    }

    console.log(userName, day, date)
    let divStyle = {
        backgroundColor : 'purple',
        color : 'white',
        fontSize : '20px'
    }

    return(
        <div style={divStyle}> 나 혼자하는 실습~
            <h1>{today.toLocaleDateString()}</h1>
            <hr/>
            <h3>안녕하세요 {userName}님 오늘은 {day}일 입니다. {date}이니 힘내세요. 행복한 하루 보내세요.</h3>
            <h1>내 브랜치에서 수정한 부분</h1>
            <h1>수정한 부분2</h1>
            
        </div>
    )
}

export default AppSelf 