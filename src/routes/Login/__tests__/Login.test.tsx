import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../Login";
import { describe, it, expect, vi } from "vitest";

describe("App", () => {
  it("should work as expected", () => {
    render(<Login />);
    expect(1 + 1).toBe(2);
  });
});
