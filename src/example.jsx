

export function DB() {
    return (
        <div>
            <h1>안녕하세요</h1>
            <p>오늘은 리액트 수업입니다.</p>
        </div>
    )
}

export default DB;

// export = 내보낸다.
// default = 다른 파일에서 example. import 그 떄 default를 기본으로 해서 받겠다. 
// function = 함수
// () = 매개변수
// return = c언어 return 반환값 jsx에서의 return 똑같긴한데 약간 달라요
// 프론트 입장에서는 종료를 하면안되죠? return = 0 내부로직같은 것이 끝나씅ㄹ 때 계산식 c = a+b if(c=1) return 0;