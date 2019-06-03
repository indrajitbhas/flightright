export class Blog {
  id;
  writer;
  title;
  date;
  body;
  constructor(
      id: number,
      writer: string,
      title: string,
      body: string
    ){
      this.id = id || Math.floor(Math.random() * (10000 - 999 + 1) + 999);
      this.writer = writer || "Indra";
      this.title = title || "";
      this.date =  new Date();
      this.body = body || "";
    }
}
