class Api {
  private static url =
    "https://frontend-test-assignment-api.abz.agency/api/v1/";
  static async get(url: string): Promise<any> {
    try {
      return await fetch(Api.url + url).then((res) => res.json());
    } catch (err) {
      console.error(err);
    }
  }
}

export { Api };
