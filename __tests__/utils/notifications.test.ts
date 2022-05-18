import { Notification } from "../../src/types/Notification";
import { groupLikeNotifs } from "../../src/utils/notification";
import * as R from "ramda";

describe("notifications", () => {
  describe("groupLikeNotifs", () => {
    const notifs: Notification[] = [
      {
        contentType: "dog",
        created: 1649684596,
        to: "3Ntw9U8rdyZho2L9tlj57QxqYb93",
        author: "fRe0Ulq6lsTxDbXz4BU272PwjSF3",
        from: [
          "CkNO4njEmiNyf4BwxIjf",
          "Gz5qsCqy45qeSldIgOeT",
          "XGAXTtObqaA2bSjtdYkR",
          "hIdiQ7tR8QZ3tqosTj4k",
        ],
        summary: "",
        contentId: "uSnPd1mLrMBVG469kc42",
        actionType: "friend",
        read: true,
        id: "f9ttdoO10t4OuY4tIunX",
      },
      {
        contentType: "post",
        created: 1649684596,
        to: "3Ntw9U8rdyZho2L9tlj57QxqYb93",
        author: "fRe0Ulq6lsTxDbXz4BU272PwjSF3",
        from: [
          "CkNO4njEmiNyf4BwxIjf",
          "Gz5qsCqy45qeSldIgOeT",
          "XGAXTtObqaA2bSjtdYkR",
          "hIdiQ7tR8QZ3tqosTj4k",
        ],
        summary: "",
        contentId: "uSnPd1mLrMBVG469kc42",
        actionType: "comment",
        read: true,
        id: "f9ttdoO10t4OuY4tIunX",
      },
      {
        contentType: "post",
        created: 1649684596,
        to: "3Ntw9U8rdyZho2L9tlj57QxqYb93",
        author: "fRe0Ulq6lsTxDbXz4BU272PwjSF3",
        from: ["CkNO4njEmiNyf4BwxIjf"],
        summary: "",
        contentId: "uSnPd1mLrMBVG469kc42",
        actionType: "like",
        read: true,
        id: "f9ttdoO10t4OuY4tIunX",
      },
      {
        contentType: "post",
        created: 1649684596,
        to: "3Ntw9U8rdyZho2L9tlj57QxqYb93",
        author: "fRe0Ulq6lsTxDbXz4BU272PwjSF3",
        from: ["Gz5qsCqy45qeSldIgOeT"],
        summary: "",
        contentId: "uSnPd1mLrMBVG469kc42",
        actionType: "like",
        read: true,
        id: "f9ttdoO10t4OuY4tIunX",
      },
      {
        contentType: "post",
        created: 1649684596,
        to: "3Ntw9U8rdyZho2L9tlj57QxqYb93",
        author: "fRe0Ulq6lsTxDbXz4BU272PwjSF3",
        from: ["XGAXTtObqaA2bSjtdYkR"],
        summary: "",
        contentId: "uSnPd1mLrMBVG469kc42",
        actionType: "like",
        read: false,
        id: "f9ttdoO10t4OuY4tIunX",
      },
      {
        contentType: "post",
        created: 1649684596,
        to: "3Ntw9U8rdyZho2L9tlj57QxqYb93",
        author: "fRe0Ulq6lsTxDbXz4BU272PwjSF3",
        from: ["XGAXTtObqaA2bSjtdYkR"],
        summary: "",
        contentId: "different-post",
        actionType: "like",
        read: false,
        id: "f9ttdoO10t4OuY4tIunX",
      },
    ];

    it("groups like notifs together", () => {
      const grouped = groupLikeNotifs(notifs);
      expect(grouped).toHaveLength(4);
      expect(R.find(R.propEq("actionType", "like"), grouped)?.read).toBeFalsy();
    });

    it("groups 'from' together", () => {
      const grouped = groupLikeNotifs(notifs);
      const ns = R.filter(R.propEq("actionType", "like"), grouped);
      const n = R.find(R.propEq("contentId", "uSnPd1mLrMBVG469kc42"), ns);
      expect(n?.from).toHaveLength(3);
      expect(n?.from).toContain("XGAXTtObqaA2bSjtdYkR");
      expect(n?.from).toContain("Gz5qsCqy45qeSldIgOeT");
      expect(n?.from).toContain("CkNO4njEmiNyf4BwxIjf");
    });
    it("left other notifs untouched", () => {
      const grouped = groupLikeNotifs(notifs);
      const n = R.reject(R.propEq("actionType", "like"), grouped);
      expect(n).toHaveLength(2);
    });
  });
});
