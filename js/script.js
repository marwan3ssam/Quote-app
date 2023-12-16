function pickRand() {
    var x = Math.round(Math.random() * 10);
    var quote = [
        `" Be yourself; everyone else is already taken. "`,
        `" So many books, so little time. "`,
        `" A room without books is like a body without a soul. "`,
        `" Be the change that you wish to see in the world. "`,
        `" In three words I can sum up everything I've learned about life: it goes on. "`,
        `"  Don't walk in front of me, I may not follow.
            Don't walk behind me, I may not lead.
            Walk beside me, just be my friend. "`,
        `" If you tell the truth, you don't have to remember anything. "`,
        `" A friend is someone who knows all about you and still loves you. "`,
        `" To live is the rarest thing in the world. Most people exist, that is all. "`,
        `" Always forgive your enemies; nothing annoys them so much. "`,
        `" Without music, life would be a mistake. "`];
    var author = [
        `--Oscar Wilde`,
        `--Frank Zappa`,
        `--Marcus Tullius Cicero`,
        `--Mahatma Gandhi`,
        `--Robert Frost`,
        `--Albert Camus`,
        `--Mark Twain`,
        `--Elbert Hubbard`,
        `--Oscar Wilde`,
        `--Oscar Wilde`,
        `--Friedrich Nietzscheten`];
    document.getElementById('quoteOutput').innerHTML = quote[x];
    document.getElementById('authorOutput').innerHTML = author[x];
}