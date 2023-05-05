
  describe("click on crop", () => {
    it("returns click on crop", () => {
      var actual = cropdone();
      expect(actual).toBe("click on crop");
    });
  });

  describe(" is basic clicked ", () => {
    it("returns basic", () => {
      var actual = basic();
      expect(actual).toBe("basic");
    });
  });

  describe(" is image imported ", () => {
    it("returns image imported", () => {
      var actual = inputimage();
      expect(actual).toBe("image imported");
    });
  });

  describe(" is image editor open ", () => {
    it("returns editor opened", () => {
      var actual = editoropened();
      expect(actual).toBe("editor opened");
    });
  });

  describe(" is drawing clicked ",() => {
    it("returns click on drawings",() => {
      var actual = drawn();
      expect(actual).toBe("drawn successfully");
    });
  });

  describe(" is filters clicked ",() => {
    it("returns click on filters",() => {
      var actual = filtersapplied();
      expect(actual).toBe("filters applied");
    });
  });

  describe(" is layers showing ",() => {
    it("returns all applied layers",() => {
      var actual = layersstored();
      expect(actual).toBe("Layers stored");
    });
  });

  describe(" is history option clicked ",() => {
    it("returns shown all applied actions",() => {
      var actual = historyControl();
      expect(actual).toBe("history under control");
    });
  });

  describe(" is save clicked ",() => {
    it("returns saved image",() => {
      var actual = saveimage();
      expect(actual).toBe("image saved successfully");
    });
  });
