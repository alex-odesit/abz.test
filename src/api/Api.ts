class Api {
  private static url =
    "https://frontend-test-assignment-api.abz.agency/api/v1/";
  private static token: string;

  static async registration(): Promise<any> {
    const data = await fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/token"
    ).then((res) => res.json());
    if (data.success) {
      Api.token = data.token;
    } else {
      throw console.error("Token is not received");
    }
  }
  static async get(url: string): Promise<any> {
    try {
      return await fetch(Api.url + url).then((res) => res.json());
    } catch (err) {
      console.error(err);
    }
  }

  static async post(url: string, data: any): Promise<any> {
    try {
      return await fetch(Api.url + url, {
        method: "POST",
        body: Api.createFormData(data),
        headers: {
          Token: Api.token,
        },
      });
    } catch (err) {
      console.error(err);
    }
  }

  static createFormData(data: any): FormData {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      // @ts-ignore
      formData.append(key, value);
    });

    return formData;
  }
}

export { Api };
