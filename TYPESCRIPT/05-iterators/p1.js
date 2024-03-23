//Example 1
for (var i_1 = 0; i_1 < 10; i_1++) {
    console.log('Example-1', i_1);
}
//Example 2
var i = 0;
for (; i < 10; i++) {
    console.log('Example 2= ', i);
}
//Example 3
for (var i_2 = 0;; i_2++) {
    console.log("Example 3=", i_2);
    if (i_2 > 9)
        break;
}
for (;;) {
    console.log("example_4=", i);
    i++;
    if (i > 9)
        break;
}
