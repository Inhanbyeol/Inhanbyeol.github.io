function solution(my_string) {
    return [...my_string.replaceAll(/[^0-9]/g,'')].sort((a,b) => a - b).map((x) => Number(x));
}