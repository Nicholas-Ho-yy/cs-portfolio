#ifndef CANDLESTICK_H
#define CANDLESTICK_H

#include <string>

/**
 * @brief Represents a candlestick data structure for temperature analysis.
 *
 * Each Candlestick instance encapsulates a time frame (e.g., year, month, or day)
 * along with temperature statistics for that period, including:
 * - Opening temperature
 * - Highest temperature
 * - Lowest temperature
 * - Closing temperature
 */
struct Candlestick {
    std::string date;  // Time frame (e.g., year, month, or day).
    double open;       // Opening temperature.
    double high;       // Highest temperature.
    double low;        // Lowest temperature.
    double close;      // Closing temperature.

    /**
     * @brief Constructs a Candlestick instance.
     *
     * @param d The time frame (e.g., year, month, or day).
     * @param o The opening temperature.
     * @param h The highest temperature.
     * @param l The lowest temperature.
     * @param c The closing temperature.
     */
    Candlestick(std::string d, double o, double h, double l, double c)
        : date(d), open(o), high(h), low(l), close(c) {}
};

#endif // CANDLESTICK_H
