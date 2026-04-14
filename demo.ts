class CodeMaestro {
    constructor(private alias: string) {}

    private get banner(): string {
        return [
            '╔════════════════════════════════════╗',
            `║  代码即态度，输出即气场，${this.alias}  ║`,
            '╚════════════════════════════════════╝',
        ].join('\n');
    }

    public perform(): void {
        console.log(this.banner);
        console.log('>> 启动传奇模式');
        console.log(`>> 当前昵称：${this.alias}`);
        console.log('>> 这不是编程，这是一场秀。');
    }
}

const demo = new CodeMaestro('jacky');
demo.perform();
