const BASE_URL_USERS = "http://localhost:8080/api1";

export const geTable = async () => {
  try {
    const response = await fetch(BASE_URL_USERS + "/tables");
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const getOrder = async (type) => {
  try {
    const response = await fetch(
      BASE_URL_USERS + "/orders/ispayed?flag=" + type
    );
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const getFoods = async () => {
  try {
    const response = await fetch(BASE_URL_USERS + "/foods");
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
export const getFoodsByType = async (key) => {
  try {
    const response = await fetch(BASE_URL_USERS + "/foods" + "?type=" + key);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const postOrderApi = async (order, id) => {
  try {
    const response = await fetch(BASE_URL_USERS + "/orders/table/" + id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
export const putOrderApi = async (order, id) => {
  try {
    const response = await fetch(BASE_URL_USERS + "/orders/update/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const deleteUserById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL_USERS}/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return { ok: true, data: "Success" };
    } else {
      return { ok: false, data: await response.json() };
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const getTableById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL_USERS}/tables/${id}`);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};



export const updatePaymentApi = async (order, id) => {
  try {
    const response = await fetch(`${BASE_URL_USERS}/orders/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
export const deleteTaskById = async (userId, taskId) => {
  try {
    const response = await fetch(
      `${BASE_URL_USERS}/${userId}/tasks/${taskId}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      return { ok: true, data: "Success" };
    } else {
      return { ok: false, data: await response.json() };
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const postUserTask = async (userId, task) => {
  try {
    const response = await fetch(`${BASE_URL_USERS}/${userId}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};
