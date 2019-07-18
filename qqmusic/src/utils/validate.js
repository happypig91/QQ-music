/**
 * 添加电影的表单校验规则
 */
export const addMovieformRules = {
    name: [
        { required: true, message: "请输入电影名称", trigger: "blur" },
        { min: 1, max: 15, message: "长度在 1 到 15 个字符", trigger: "blur" }
    ],
    imgUrl: [{ required: true, message: "请上传电影封面" }],
    actor: [
        { required: true, message: "请填写演员，用逗号分隔", trigger: "blur" }
    ],
    start_time: [
        {
            type: "date",
            required: true,
            message: "请选择开始时间",
            trigger: "change"
        }
    ],
    end_time: [
        {
            type: "date",
            required: true,
            message: "请选择结束时间",
            trigger: "change"
        }
    ],
    score: [{ required: true, message: "请填写电影评分", trigger: "blur" }],
    describe: [{ required: true, message: "请填电影简介", trigger: "blur" }]
};